require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe ProductPresenter do


  it "should have default values for rows and columns" do
    pp = ProductPresenter.new
    pp.rows.should == 30
    pp.columns.should == 35
  end

  it "should accept values for rows and columns" do
    pp = ProductPresenter.new(:rows => 20, :columns => 25)
    pp.rows.should == 20
    pp.columns.should == 25
  end

  it "should calculate the correct number of tiles" do
    pp = ProductPresenter.new(:rows => 10, :columns => 10)
    pp.num_tiles.should == 100
  end

  it "should find all products" do
    Product.stub!(:all => [mock(), mock()])
    pp = ProductPresenter.new
    pp.products.size.should == 2
  end

  it "should calculate the empty tiles in the matrix" do
    Product.stub!(:all => [mock(), mock()])
    pp = ProductPresenter.new(:rows => 3, :columns => 3)
    pp.num_empty_tiles.should == 7
  end

  it "should have the same number of tiles as the expected num_tiles" do
    Product.stub!(:all => [mock(), mock()])
    pp = ProductPresenter.new(:rows => 3, :columns => 3)
    pp.tiles.size.should == pp.num_tiles
  end

  it "should build a matrix with the right number of columns and rows" do
    Product.stub!(:all => [mock(), mock()])
    pp = ProductPresenter.new(:rows => 3, :columns => 3)
    pp.matrix.size.should == 3
    pp.matrix.each do |row|
      row.size.should == 3
    end
  end

end