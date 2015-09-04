class MyusersController < ApplicationController
  before_action :set_myuser, only: [:show, :update, :destroy]

  # GET /myusers
  # GET /myusers.json
  def index
    @myusers = Myuser.all

    render json: @myusers
  end

  def login
    @myuser=Myuser.find_by_email(params[:myuser][:email])
    puts params
    if @myuser
      if @myuser.password==params[:myuser][:password]
        render json: {
          "msg":"hello"
        }
      else
        render json:{
          "msg":"wrong password"
        }
      end
    else
      render json: {
        "msg":"bye"
      }
    end
  end

  # GET /myusers/1
  # GET /myusers/1.json
  def show
    render json: @myuser
  end

  # POST /myusers
  # POST /myusers.json
  def create
    @myuser = Myuser.new(myuser_params)

    if @myuser.save
      render json: @myuser, status: :created, location: @myuser
    else
      render json: @myuser.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /myusers/1
  # PATCH/PUT /myusers/1.json
  def update
    @myuser = Myuser.find(params[:id])

    if @myuser.update(myuser_params)
      head :no_content
    else
      render json: @myuser.errors, status: :unprocessable_entity
    end
  end

  # DELETE /myusers/1
  # DELETE /myusers/1.json
  def destroy
    @myuser.destroy

    head :no_content
  end

  private

    def set_myuser
      @myuser = Myuser.find(params[:id])
    end

    def myuser_params
      params.require(:myuser).permit(:email, :name, :password)
    end
end
