
Function.prototype.myBind = function (context, ...args) {  
    context.fn = this;
    return function (...additionalArgs) {        
        return context.fn(...args.concat(...additionalArgs));
    };
};

const point = { x: 3, y: 4 };

function displayPoint(z, t) {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${z}, t = ${t} `);
}

const displayPointMyBind = displayPoint.myBind(point, 100, 200);
console.log(`My Bind: `);
displayPointMyBind();
console.log(' ');

const displayPointStandardBind = displayPoint.bind(point, 9999, 6666);
console.log('Standard Bind: ');
displayPointStandardBind();
