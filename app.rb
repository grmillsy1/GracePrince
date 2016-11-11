require 'sinatra/base'

class GracePrince < Sinatra::Base
  get '/' do
    erb :video_view
  end

  get '/index' do
    erb :index
  end

  get '/group' do
    'oooooops'
  end

  get '/group/one' do
    erb :'./group/one'
  end

  get '/group/two' do
    erb :'./group/two'
  end

  get '/group/three' do
    erb :'./group/three'
  end

  get '/press' do
    erb :'./footer/press'
  end

  get '/process' do
    erb :'./footer/process'
  end

  get '/designwork' do
    erb :'./footer/design_work'
  end

  get '/book' do
    erb :'./footer/book'
  end

  get '/contact' do
    erb :'./footer/contact'
  end


  # start the server if ruby file executed directly
  run! if app_file == $0
end
