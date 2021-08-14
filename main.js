const span_segundos = document.getElementById('segundos')
const span_centesimos = document.getElementById('centesimos')
const formatador = (num)=> (num > 9) ? `${num}`: `0${num}`
var ss = 0
var cs = 0
var cont;

function iniciar(){
    cont = setInterval(()=> {cronometro()}, 10);
}

function parar(){
    clearInterval(cont)
}

function resetar(){
    parar()
    ss = cs = 0
    atualizar_display()
    
}

function cronometro(){
    console.log(`${ss}:${cs}`)
    cs++
    if(cs > 99){
        cs = 0
        ss++
    }
    atualizar_display()   

}

function atualizar_display(){
    span_segundos.innerHTML = formatador(ss)
    span_centesimos.innerHTML = formatador(cs)
}
/**
 *                                                                                                           
                                                                      ████                                
                                                                      ██░░████                            
                                                                      ██░░░░░░██                          
                                                                      ██░░░░░░░░██                        
                                                                      ██░░░░░░░░░░▓▓░░                    
                                                                      ██  ░░░░░░░░░░▓▓░░                  
                                                                      ██    ░░░░░░░░░░██                  
                                                                      ██    ░░░░░░░░░░░░██                
                                                                      ██      ░░░░░░░░░░░░██              
                                                                      ██  ░░    ░░░░░░░░░░░░██            
                                ░░██████████████████████        ██████████░░      ░░░░░░░░░░██            
                                ░░██░░░░░░░░░░░░░░░░░░  ██    ██          ██            ░░░░░░██          
                                ░░██  ░░░░░░░░░░░░░░      ████              ████              ██          
                                ░░██  ░░░░░░░░░░░░        ██░░                ░░▓▓              ██        
                                  ██  ░░░░░░░░░░        ▓▓░░                    ░░▓▓            ██        
                                ░░██░░  ░░░░░░░░    ░░██                                        ██        
                                ░░▓▓░░  ░░░░░░░░      ▓▓                                        ▓▓░░      
                                    ██  ░░  ░░                                                    ██      
                                    ██░░                                                          ██      
                                    ██░░                                                          ██      
                                    ██░░    ░░                                                      ██    
                                      ██      ██                                                    ██    
                                      ██░░    ██                                                    ██    
                                      ██░░    ██                                                    ██    
                                      ░░▒▒    ██                                                    ░░▒▒  
                                        ▓▓    ██                                                      ██  
                                        ▓▓    ██                                                      ██  
                                        ▒▒    ██                                                      ██  
                                        ░░██  ██                                                      ██  
                                            ████                                                      ██  
                                              ██                                ████                  ██  
                                              ██                              ████                      ██
                                              ██      ██████                ████        ████            ██
                                              ██          ██████                      ██                ██
                                              ██              ██                                        ██
                                              ██  ██▓▓              ██                  ██            ██  
                                              ██  ░░░░▓▓            ░░                  ░░▓▓▓▓      ▓▓░░  
                                ░░████████████                                                    ██      
                              ██▓▓          ██      ▓▓                                          ██        
                          ▓▓▓▓              ██  ▓▓▓▓░░                                        ▓▓░░        
                        ▓▓                  ░░██░░░░                                  ▓▓▓▓▓▓▓▓░░          
                      ██                        ████            ████████████    ██████    ░░██            
                    ██                              ██████    ██░░░░░░░░░░░░████░░░░      ░░██            
                    ██                                ██  ████░░░░░░░░░░░░░░░░██░░░░      ░░██            
                  ▓▓                                  ██  ██░░░░░░░░░░░░░░░░░░██░░░░  ▓▓██▓▓  ▓▓          
                  ██                                  ██  ██░░░░░░░░░░░░░░░░░░░░▓▓▓▓▒▒░░░░░░  ██          
                ▓▓░░                                ▓▓██▒▒▒▒░░░░░░░░░░░░░░░░░░░░██░░░░        ░░▒▒        
                ██                                  ▓▓  ██░░░░░░░░░░██░░░░░░░░░░░░██            ██        
                  ██                                ▓▓  ██░░░░░░░░██████░░░░░░░░░░██            ██        
                    ██                              ▓▓    ██░░░░░░██████░░░░░░░░░░██            ██        
                    ░░▓▓                            ▓▓    ██░░░░░░░░██░░░░░░░░░░▓▓░░            ░░██      
                      ██                            ▓▓    ▒▒▓▓░░░░░░██░░░░░░░░░░██                ██      
                        ██                          ▓▓        ██░░░░██░░░░░░░░██                  ██      
                        ██                          ▓▓        ██░░░░██░░░░▓▓██                    ██      
                          ▓▓                        ▓▓          ▓▓▓▓██▓▓▓▓                        ██      
                          ██░░░░                    ▓▓                                            ██      
                            ██░░                  ██                                              ██      
                            ██░░░░                ██                                              ██      
                              ██░░░░            ░░██                                            ██        
                                ▓▓░░░░░░░░░░░░░░░░░░▓▓                                          ██        
                                ░░▓▓░░░░░░░░░░░░░░░░▓▓                                        ▓▓░░        
                                    ██░░░░░░░░░░░░░░▓▓                                    ████            
                                      ██████████████  ██                          ████████                
                                      ░░░░░░  ░░░░░░  ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░                
                                                        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒                        
                                                                                                          
                                                                                                          
                                                                                                          
                                                                                                          
░░░░░░▒▒▒▒░░  ░░░░░░▓▓▒▒  ░░▒▒░░░░░░                                                                      
░░░░░░░░░░░░░░░░░░░░▒▒▒▒░░░░░░░░░░░░                                                                       
 * font: https://textart.sh/topic/anime
 */