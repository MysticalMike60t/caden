import PropTypes from "prop-types";

const ASCII_ART_1 = `
        #                ##                                              ###                   ##   
       ##                 ##          #########                        ##                      ##   
      ##                    ##        ##       #####+                ##                        ##   
      ##                     ###       ##           ####            ##                          #   
     ##                        ##      ##              ####        ##                           ##  
     ##                         ###     ##                ###     ##                            ##  
     ##                           ##     ##                  ##  ##                             ##  
     #                             .##    ##                   ###                              ##  
    ##                               ## ######                   ##                             ##  
    ##                              ####                          ###                           ##  
    ##                            ###                                                           ##  
    ##                          ##################                                              ##  
    ##                                                                                          ##  
    ##                                                                                          ##  
    ##                                                                                          #   
     ##                                                                                        ##   
     ##                                                                                        ##   
      #.                                                                                       ##   
      ##                                                                                      ##    
       ##                                                     ###################            ##     
        ##        ###                                     ###########      ##               ##      
        ##           ####################                 ###########       ##             ##       
         ##         ##       ############                ############        #           ###        
          ##        ##       ############                ############        ##         ##          
            ##     ##        ###########.                ############        ##     #############   
###############    ##        ###########                  ###########        ##                ##   
 ##                ##         ##########                  ###########        ##              ###    
  ##               ##         ##########                   #########         ##             ##      
    ##             ##          ########                     ######           ##           ##        
     ###            ##          ######      ###                                         ###         
        ####         #                      ###                           #           ##+           
          #    #####                                                    #++# #+#        ##          
         ##    #  + ####+                                              ## +++#           ##         
        ##       ####                                      ##             ##              ###       
       ##                                     #############                                ###      
      ##                               #######                                               ##     
     ##                                                                        ###      #######     
     ###############                                                       ####+ #######            
                   -####                                               #####                        
                        #####                                   ########                            
                          ########## +                             ##                               
                           ##      ###                              ##                              
                             ##                                      ##                             
                              ###                                     ##                            
                                 ###                                   ##                           
                                ##                                      ##                          
                              ##                                         ##                         
                             ##                                          ##                         
                            #########                                     ##                        
                                  ##                                       ##                       
                                 ##                                        ##                       
                                 ##                                         ##                      
                                ##                                          ##                      
                                ##                                           ##                     
                               ##                                            ##                     
`;

const ASCII_ART_2 = `
           #           #        ##                   ##              #        
          #             ##     ##     ###          ##                #        
          #               ##    #          ##     #                  #        
         #                  ##   #            ## #                   ##       
         #                    ## ####           ##                   ##       
         #                   ##                    #                 ##       
         #                 ############                              ##       
         #                                                           #        
         #                                                           #        
          #                                                         ##        
          ##                                      #########         #         
           ##     ###############           ########    #         ##          
            ##     ##    ########           ########     #       #            
      ####    #    #     ########           ########     #    ########        
       #          ##      ######            #######      #         ##         
        ##         #      ######             .####       #       ##           
           ##       #       ##    ####                         ##             
            #  ##+# ++#                              #####       #            
           #      #                  ###    ##                    #           
          #                     ####                               ##         
         ##########+                                   ### #.##               
                     ####                       ######                        
                        #   ####                   #                          
                         ##                         #                         
                            #                        #                        
                          #                           #                       
                        ######                         #                      
                            #                           #                     
                           ##                           ##                    
                           #                             #                    
`;

const ASCII_ART_3 = `
         #        #    ####          #          #       
        #           #  #      ##   #            #       
        #             # ##        #             #       
        #            #                          #       
        #                                       #       
        #                                       #       
         #                      #########      #        
          #    #   #####       #####    #    #          
      #  #### #    #####       #####    #      #        
        #     .     ###          ##     #    #          
          # ##+ #                    ##+#    #          
         #             #+##  ##                #        
         ###  ##                      ##                
                  # -###            #                   
                    ##               #                  
                   #                  #                 
                     #                 #                
                    #                   #               
`;

const Boykisser = ({ large = false, medium = false, small = false } = {}) => {
  large
    ? console.log(
        `%c${ASCII_ART_1}`,
        "font-family: monospace; white-space: pre;"
      )
    : medium
    ? console.log(
        `%c${ASCII_ART_2}`,
        "font-family: monospace; white-space: pre;"
      )
    : small
    ? console.log(
        `%c${ASCII_ART_3}`,
        "font-family: monospace; white-space: pre;"
      )
    : console.log(
        `%c${ASCII_ART_2}`,
        "font-family: monospace; white-space: pre;"
      );
};

Boykisser.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
};

export default Boykisser;
