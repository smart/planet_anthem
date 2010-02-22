require 'app/presenters/product_presenter'
class ProductsController < ApplicationController
  layout "application", :except => :show
  BREAKER = "3"

  def index
    response.headers['Cache-Control'] = 'public, max-age=10'
    @product_presenter = ProductPresenter.new
    fresh_when(:etag => "#{BREAKER}-#{@product_presenter.sold_out_count}", :public => true)
  end

  def test
    @live = true
    response.headers['Cache-Control'] = 'public, max-age=10'
    @product_presenter = TestProductPresenter.new(:percent_sold_out => params[:percent_sold_out].to_i)
    render "products/index"
  end

  def sync
    Product.sync
    @product_presenter = ProductPresenter.new
    render "products/index"
    cache_page(nil, :controller => "products", :action => "index")
  end

  private

  def live?
    @live || false
  end
  helper_method :live?


end
