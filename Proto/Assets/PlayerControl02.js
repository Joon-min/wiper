#pragma strict


var i=0;
var j=0;
var imax=2;
var jmax=2;
function Update () {
          if((j<jmax-1))   
          { 
                     if(Input.GetKey(KeyCode.W))
                     {
                      transform.position.y=GlobalLogic.window[i,j].transform.position.y;
                      j++;
                     } 
                     
           }
           if(j>0)
           {
                     if(Input.GetKey(KeyCode.S))
                     {
                      transform.position.y=GlobalLogic.window[i,j].transform.position.y;
                      j--;
                     }
                     
          }
          if((i>0))   
          {      
                     if(Input.GetKey(KeyCode.A))
                     {
                      transform.position.x=GlobalLogic.window[i,j].transform.position.x;
                      i--;
                     }
                     
                     }
           if((i<imax-1))
           {
                     if(Input.GetKey(KeyCode.D))
                     {
                      transform.position.x=GlobalLogic.window[i,j].transform.position.x;
                      i++;
                     }
          }
}
