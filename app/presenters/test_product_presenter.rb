class TestProductPresenter < ProductPresenter

  def initialize(opts = {})
    @width = opts.delete(:width) || DEFAULT_WIDTH
    @height = opts.delete(:height) || DEFAULT_HEIGHT
    @percent_sold_out = opts.delete(:percent_sold_out) || 0
  end

  def products
    @products ||= load_products
  end

  def load_products
    prods = Product.all
    prods.each {|prod| prod.qoh = ((rand(100) >= (100 - @percent_sold_out)) ? 0 : 1)}
    prods
  end
end
