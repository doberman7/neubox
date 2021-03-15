file = File.open("Input.txt")
file_data = file.readlines.map(&:chomp)


class Marcador
  #   to access atributes with .dot nomenclature
  attr_accessor :ronda, :p1Points, :p2Points, :lider, :ventaja

  def initialize(ronda, p1Points, p2Points, lider, ventaja)
    @ronda, @p1Points , @p2Points, @lider, @ventaja = ronda, p1Points, p2Points, lider, ventaja
  end
end

def getAryOfMarcadorObjects(arch)
    marcadores = []
        arch.each_with_index do |data,index|  
            case index
                when 0
                    rondas = data
                when 1..rondas
                    points = data.gsub(/\s+/m, ' ').strip.split(" ")
                    dataP1 = points[0]
                    dataP2 = points[1]
                     # determine winner of ronda    
                    if dataP1.to_i > dataP2.to_i
                        lider = "P1"
                        advantage = dataP1.to_i - dataP2.to_i
                        marc = Marcador.new(index, dataP1, dataP2, lider ,advantage)    
                    elsif dataP1.to_i < dataP2.to_i
                        lider = "P2"
                        advantage =  dataP2.to_i - dataP1.to_i 
                        marc = Marcador.new(index, dataP1, dataP2, lider,advantage)        
                    end
                    
                    marcadores.push(marc)
                else
                "outside of range"
            end 

        end
    return marcadores
end

def theWinnerIs(array)    
    orderedMarcadores = array.sort_by(&:ventaja)    
    return orderedMarcadores[-1]    
end

aryMarcadores = getAryOfMarcadorObjects(file_data)
winnerMarcador = theWinnerIs(aryMarcadores)
p winnerMarcador.lider
p winnerMarcador.ventaja

# writte 
File.open("Output.txt", "w") { |f| f.write "#{winnerMarcador.lider} \n #{winnerMarcador.ventaja}" }
