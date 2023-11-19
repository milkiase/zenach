function Tree(){
    this.left = null
    this.right = null
}



Tree.prototype.additem   = function(value){
    if(!this.left && !this.right)  {
        this.left = value
        this.right = value

    }
    if(value<this.left) this.left.additem(value)
     if(value>=this.right)  this.left.additem(value)
    
    
}




let tree = new Tree()
tree.additem(10)
tree.additem(40)
tree.additem(70)
tree.additem(30)
tree.additem(90)



console.log(tree)