require "sinatra"

set :public_folder, "static"
set :static, true

get "/" do
  send_file File.join(settings.public_folder, "index.html")
end
