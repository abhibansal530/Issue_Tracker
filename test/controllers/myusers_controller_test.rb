require 'test_helper'

class MyusersControllerTest < ActionController::TestCase
  setup do
    @myuser = myusers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:myusers)
  end

  test "should create myuser" do
    assert_difference('Myuser.count') do
      post :create, myuser: { email: @myuser.email, name: @myuser.name, password: @myuser.password }
    end

    assert_response 201
  end

  test "should show myuser" do
    get :show, id: @myuser
    assert_response :success
  end

  test "should update myuser" do
    put :update, id: @myuser, myuser: { email: @myuser.email, name: @myuser.name, password: @myuser.password }
    assert_response 204
  end

  test "should destroy myuser" do
    assert_difference('Myuser.count', -1) do
      delete :destroy, id: @myuser
    end

    assert_response 204
  end
end
