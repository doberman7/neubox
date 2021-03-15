file = File.open("Input.txt")
file_data = file.readlines.map(&:chomp)


class Marcador
  def initialize(prop1, prop2, prop3)
    @ronda, @p1Points , @p2Points = prop1, prop2, prop3
  end
end

marcadores = []

file_data.each_with_index do |data,index|  
    case index
        when 0
            rondas = data
        when 1..rondas
            points = data.gsub(/\s+/m, ' ').strip.split(" ")
            dataP1 = points[0]
            dataP2 = points[1]
            marc = Marcador.new(index, dataP1, dataP2)    
            marcadores.push(marc)
        else
        "outside of range"
    end 
end

puts "#{marcadores}"


# writte 
# File.open("Output.txt", "w") { |f| f.write "#{file_data} - User logged in\n" }
