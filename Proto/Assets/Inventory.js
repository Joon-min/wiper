#pragma strict

private var InventoryOn = false;

// GUI POS/SIZE
var WindowPosition : Vector3 = new Vector3(0, 0, -1);
var WindowSize : Vector2 = new Vector2(360, 360);


//texture
var InventoryWindow : Texture;

function Update () 
{
    // On or Off
    if (Input.GetKeyUp("i"))
    {
        if (InventoryOn == false)
        {
            InventoryOn = true;
        }
        else if (InventoryOn == true)
        {
            InventoryOn = false;
        } 
    }   
}

function OnGUI() 
{
    if (InventoryOn == true)
    {
        GUI.BeginGroup (new Rect(WindowPosition.x, WindowPosition.y, WindowSize.x, WindowSize.y));
        
        GUI.EndGroup();   
    }
}