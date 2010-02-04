class ProductPresenter
  DEFAULT_WIDTH = 900
  DEFAULT_HEIGHT = 900
  attr_reader :width, :height

  def initialize(opts = {})
    @width = opts.delete(:width) || DEFAULT_WIDTH
    @height = opts.delete(:height) || DEFAULT_HEIGHT
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


  private

  def smallest_square
    Math.sqrt(products.size).ceil
  end
end


