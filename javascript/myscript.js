var giocatore=1;
var array=[
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,
            0,0,0,0,0,0,0
          ]


function digita(bot){
    
    var celle=document.getElementsByClassName("c");
    var indicePartenza = 42-7+bot;
    var i = 0;

    for(i=indicePartenza; i>=0; i=i-7)
    {
        if(array[i]==0){
            if(giocatore==1){
                array[i]=1;
                giocatore=2;
                celle[i].style.backgroundColor="red";
                break;    
            }
            else
            {
                array[i]=2;
                giocatore=1;
                celle[i].style.backgroundColor="yellow";
                break;
           
            }
        }
    }
    
    controllo();
}

function controllo()
{
    for(var i = 0; i < 42; i++) 
    {
            
            var su = i;
            var giu = i;
            var sx = i;
            var dx = i;
            var dad = i;
            var das = i;
            var dbd = i;
            var dbs = i;
            
           
            var contSu = 0;
            var contGiu = 0;
            var contSx = 0;
            var contDx = 0;
            var contdad = 0;
            var contdas = 0;
            var contdbd = 0;
            var contdbs = 0;

        for(var j = 0; j < 4; j++)
        {
            if(array[i] != 0)
            {

                // verticale
                if(su > 0 && (su-7) > 0) // stop 
                {  
                    if(array[su] == array[su-7]) 
                    {
                        contSu++;
                        su = su - 7;
                    }

                }
                if(giu < 42 && (giu+7) < 42)
                {
                    if(array[giu] == array[giu-7]) 
                    {
                        contGiu++;
                        giu = giu - 7;
                    }
                }
              
                if(dad > 0 && (dad-6)>0 && (dad+1)%7 != 0)
                {
                    if(array[dad] == array[dad-6]) 
                    {
                        contdad++;
                        dad = dad - 6;

                    }
                    
                }
                if(das > 0 && (das-8)>0 && das%7 != 0)
                {
                    if(array[das] == array[das-6]) 
                    {
                        contdas++;
                        das = das - 6;

                    }
                }
                if(dbs < 42 && (dbs+6)<42 && dbs%7 != 0)
                {
                    if(array[dbs] == array[dbs-6]) 
                    {
                        contdbs++;
                        dbs = dbs - 6;
                    }
                }
                if(dbd < 42 && (dbs+8)<42 && (dbd+1)%7 != 0)
                {
                    if(array[dbd] == array[dbd-6]) 
                    {
                        contdbd++;
                        dbd = dbd - 6;
                    }
                }

                if((sx%7)!= 0)
                {
                    if(array[sx] == array[sx-1])
                    {
                        contSx++;
                        sx = sx - 1;
                    }
                }

                if((dx+1%7) != 0)
                {
                    if(array[dx] == array[dx-1])
                    {
                        contDx++;
                        dx = dx + 1;
                    }
                }
            }

        }
       

        //stampa
        stampaVincita(contSu, array[i]);
        stampaVincita(contGiu, array[i]);
        stampaVincita(contSx, array[i]);
        stampaVincita(contDx, array[i]);
        stampaVincita(contdad, array[i]);
        stampaVincita(contdas, array[i]);
        stampaVincita(contdbd, array[i]);
        stampaVincita(contdbs, array[i]);
 
    }
}



function stampaVincita(celleUguali,gioca)
{
    header = document.getElementById("header");

    if(celleUguali == 3)
    {
        if(gioca == 1)
        {
            header.innerHTML = "Ha vinto il giocatore 1";
        }
        if(gioca == 2)
        {
            header.innerHTML = "Ha vinto il giocatore 2";
            
        }
    }
}

function reset()
{
    for (var i = 0; i < 42; i++) {
            array[i] = 0;     
    }
    giocatore = 1;
    
    celle = document.getElementsByClassName("c");
    
    for (var i = 0; i < 42; i++){
        
        celle[i].style.backgroundColor = "white";        
    }

}
















