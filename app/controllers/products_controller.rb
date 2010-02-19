require 'app/presenters/product_presenter'
class ProductsController < ApplicationController
  layout "application", :except => :show
  BREAKER = "2"

  def index
    fresh_when(:etag => "#{BREAKER}-#{sold_out_count}", :public => true)
    @product_presenter = ProductPresenter.new
  end

  def test
    @product_presenter = TestProductPresenter.new(:percent_sold_out => params[:percent_sold_out].to_i)
    render "products/index"
  end

  def sync
    Product.sync
    @product_presenter = ProductPresenter.new
    render "products/index"
    cache_page(nil, :controller => "products", :action => "index")
  end

  def show
    @product = Product.find(params[:id])
    fresh_when(:etag => @product, :last_modified => @product.updated_at.utc, :public => true)
    #render :template => "products/show", :layout => false
  end

  def sold_out_count
    @soc ||= Product.count(:conditions => "qoh = 0")
  end

end
