file = File.open("Input.txt")
file_data = file.readlines.map(&:chomp)

puts file_data