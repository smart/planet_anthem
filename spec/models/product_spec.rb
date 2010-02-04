require 'spec_helper'

describe Product do

  describe "sync" do
    before(:all) do
      @valid_json = '[{"id":"1","number":"320000","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"2","number":"320001","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"3","number":"320002","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"4","number":"320003","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"5","number":"320004","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"6","number":"320005","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"7","number":"320006","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"8","number":"320007","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"9","number":"320008","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"10","number":"320009","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"11","number":"320010","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"12","number":"320011","description":"Signed CD and Limited Edition Tshirt","price":"20.00","qoh":"1"},{"id":"13","number":"320012","description":"Signed CD and Limited Edition Tshirt","price":"20.00","qoh":"1"},{"id":"14","number":"320013","description":"Signed CD and Limited Edition Tshirt","price":"20.00","qoh":"1"},{"id":"15","number":"320014","description":"Signed CD and Limited Edition Tshirt","price":"20.00","qoh":"1"},{"id":"16","number":"320015","description":"Signed CD and Limited Edition Tshirt","price":"20.00","qoh":"1"},{"id":"17","number":"320016","description":"Signed CD and Limited Edition Tshirt","price":"20.00","qoh":"1"},{"id":"18","number":"320017","description":"Signed CD and Limited Edition Tshirt","price":"20.00","qoh":"1"},{"id":"19","number":"320018","description":"Signed CD and Limited Edition Tshirt","price":"20.00","qoh":"1"},{"id":"20","number":"320019","description":"Signed CD and Limited Edition Poster","price":"20.00","qoh":"1"},{"id":"21","number":"320020","description":"Signed CD and Limited Edition Poster","price":"20.00","qoh":"1"},{"id":"22","number":"320021","description":"Signed CD and Limited Edition Poster","price":"20.00","qoh":"1"},{"id":"23","number":"320022","description":"Signed CD and Limited Edition Poster","price":"20.00","qoh":"1"},{"id":"24","number":"320023","description":"Signed CD and Dinner with Magner in an any City","price":"50.00","qoh":"1"},{"id":"25","number":"320024","description":"Signed CD and Drum Lesson with Allen","price":"50.00","qoh":"1"},{"id":"26","number":"320025","description":"Signed CD and voicemail message from Marc Brownstein","price":"35.00","qoh":"1"},{"id":"27","number":"320026","description":"Signed CD and write setlist with Marc for one show","price":"50.00","qoh":"1"},{"id":"28","number":"320027","description":"Signed CD and song request any show","price":"50.00","qoh":"1"},{"id":"29","number":"320028","description":"Signed CD and VIP access to Camp Bisco","price":"75.00","qoh":"1"},{"id":"30","number":"320029","description":"Signed CD and All Access Pass for one year","price":"250.00","qoh":"1"},{"id":"31","number":"320030","description":"Signed CD and back massage from Jon Gutwillig","price":"100.00","qoh":"1"}]"'
    end

    it "should create new records it finds from the json feed" do
      valid_json = '[{"id":"1","number":"320000","description":"Signed CD","price":"10.00","qoh":"1"},{"id":"2","number":"320001","description":"Signed CD","price":"10.00","qoh":"1"}]'
      Product.stub!(:fetch_response => valid_json)
      Product.sync
      Product.all.size.should == 2
      first = Product.first
      first.number.should == 320000
      first.sold_out?.should be_false
      Product.destroy_all
    end

    it "it should update records it finds from the json feed" do
      Product.create(:number => "320000", :description => "Signed CD", :price => "10.00",:qoh => "1")
      valid_json = '[{"id":"1","number":"320000","description":"Signed CD","price":"10.00","qoh":"0"},{"id":"2","number":"320001","description":"Signed CD","price":"10.00","qoh":"1"}]'
      Product.stub!(:fetch_response => valid_json)
      Product.sync
      Product.all.size.should == 2
      first = Product.first
      first.number.should == 320000
      first.sold_out?.should be_true
      Product.destroy_all
    end

     it "should gracefully handle an error updating product data"

     it "should raise an error if json can't be fetched"

   end
end
