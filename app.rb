require 'sinatra/base'

class GracePrince < Sinatra::Base
  get '/' do
    erb :video_view
  end

  get '/index' do
    erb :index
  end




  # start the server if ruby file executed directly
  run! if app_file == $0
end
