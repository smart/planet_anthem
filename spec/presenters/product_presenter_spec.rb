require 'spec_helper'

describe ProductPresenter do


  it "should determine the smallest square number of tiles from the amount of products" do
     Product.stub!(:all => [mock()] * 320)
     pp = ProductPresenter.new
     pp.num_tiles == 324
  end

  it "should find all products" do
    Product.stub!(:all => [mock(), mock()])
    pp = ProductPresenter.new
    pp.products.size.should == 2
  end

  it "should calculate the empty tiles in the matrix" do
    Product.stub!(:all => [mock()] * 7)
    pp = ProductPresenter.new
    pp.num_empty_tiles.should == 2
  end

  it "should have the same number of tiles as the expected num_tiles" do
    Product.stub!(:all => [mock()] * 7)
    pp = ProductPresenter.new
    pp.tiles.size.should == pp.num_tiles
  end

  it "should be able to be instantiated with the size of the presenter" do
    pp = ProductPresenter.new(:width => 800, :height => 300)
    pp.width.should == 800
    pp.height.should == 300
  end

  it "should default to 900 by 900" do
    pp = ProductPresenter.new
    pp.width.should == 900
    pp.width.should == 900
  end

  it "should calculate the tile size based on the width, height and number of tiles" do
    Product.stub!(:all => [mock()] * 7)
    pp = ProductPresenter.new
    pp.tile_height.should == 300
    pp.tile_width.should == 300
  end
end