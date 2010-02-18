require 'app/presenters/product_presenter'
class ProductsController < ApplicationController
  before_filter :etag_check, :only => :index
  caches_action :index, :cache_path => Proc.new { |controller| "/mosaic/" + controller.sold_out_count.to_s}

  def index
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
    #fresh_when(:etag => @article, :last_modified => @article.created_at.utc, :public => true)
  end

  def show
    @product = Product.find(params[:id])
    response.headers['Cache-Control'] = 'public, max-age=60'
    render :template => "products/show", :layout => false
  end

  def sold_out_count
    @soc ||= Product.count(:conditions => "qoh = 0")
  end

  def etag_check
    fresh_when(:etag => "1-#{sold_out_count}", :public => true)
  end

end
