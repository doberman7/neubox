file = File.open("Input.txt")
file_data = file.readlines.map(&:chomp)


class Marcador
  def initialize(p1, p2)
    @index, @data = p1, p2
  end
end

marcadores = []

file_data.each_with_index do |data,index|
    case index
        when 0
        rondas = data
        when 1..rondas
        marc = Marcador.new(index, data)    
        marcadores.push(marc)
        else
        "outside of range"
    end 
end

puts "#{marcadores}"


# writte 
# File.open("Output.txt", "w") { |f| f.write "#{file_data} - User logged in\n" }
