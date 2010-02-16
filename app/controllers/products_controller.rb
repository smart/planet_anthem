require 'app/presenters/product_presenter'
class ProductsController < ApplicationController
  #caches_action :feed, :cache_path => Proc.new { |controller|

  def index
    @product_presenter = ProductPresenter.new
  end

  def test
    @product_presenter = TestProductPresenter.new(:percent_sold_out => params[:percent_sold_out].to_i)
    render "products/index"
  end

  # GET /products/1
  # GET /products/1.xml
  def show
    @product = Product.find(params[:id])
  end


end
