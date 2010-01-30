class ProductPresenter
  DEFAULT_COLUMNS = 35
  DEFAULT_ROWS = 30
  attr_reader :rows, :columns

  def initialize(opts = {})
    @rows = opts.delete(:rows) || DEFAULT_ROWS
    @columns = opts.delete(:columns) || DEFAULT_COLUMNS
  end


  def tiles
    products + ([nil] * num_empty_tiles)
  end

  def products
    @products ||= Product.all
  end

  def num_tiles
    rows * columns
  end

  def num_empty_tiles
    num_tiles - products.size
  end
=begin
  def matrix
    @matrix ||= build_matrix
  end

  def build_matrix
    mat = []
    rows.times do |time|
      mat[time] ||= []
      columns.times.collect {|t| tiles[time * t]}

    end
    mat
  end
=end



end


