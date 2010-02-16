class ProductPresenter
  DEFAULT_WIDTH = 900
  DEFAULT_HEIGHT = 900
  attr_reader :width, :height

  def initialize(opts = {})
    @width = opts.delete(:width) || DEFAULT_WIDTH
    @height = opts.delete(:height) || DEFAULT_HEIGHT
  end


  def smallest_square
    Math.sqrt(products.size).ceil
  end

  def tiles
    products + ([nil] * num_empty_tiles)
  end

  def products
    @products ||= Product.all
  end

  def num_tiles
    smallest_square**2
  end

  def num_empty_tiles
    num_tiles - products.size
  end

  def tile_width
    width / smallest_square
  end

  def tile_height
    height / smallest_square
  end

  def recent_sell_out_ids
    @rsoi ||= Product.recent_sell_out_ids
  end

  def product_class(product)
    return "recent_sell_out" if recent_sell_out_ids.include?(product.id)
    return "sold_out" if product.sold_out?
  end
end


