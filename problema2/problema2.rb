file = File.open("Input.txt")
file_data = file.readlines.map(&:chomp)

# puts file_data

File.open("Output.txt", "w") { |f| f.write "#{Time.now} - User logged in\n" }
