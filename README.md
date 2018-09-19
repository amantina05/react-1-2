<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we will create an e-commerce React application from start to finish. We will start with the basic file structure from `create-react-app`, with the only difference being that `src/App.js` is empty. We will be working on this app over the course of three days. Each day's project is divided into four parts, with the first step being comparable to that day's mini-project and the following steps adding more features or implementing new patterns. You should expect to be able to complete the first two steps on each day, while steps three and four will offer a challenge.

# Day 2

On this day, we will be refactoring some of our code to take advantage of some of the tools that React has to offer. You should have made it to at least part 2 of Day 1 in order to proceed with this project. We will be using reusable `functional components` to follow the DRY principle, which is, don't repeat yourself. We will pass `props` into our reusable `components`. At the end of this project, you should have a better understanding of the following concepts:

- Props
- PropTypes
- Functional Components
- Reusable Components

## Live Example

<a href="https://DevMountain.github.io/react-1-2">Click Me</a>

<img src="#" />

# Part 1

### Summary

In this part we will create two functional components so that we don't have to repeat our `JSX` for a `product` in the `products section` and `cart section`. We'll make use of `props` to pass in a `product` to `render`.

## Step 1

- Create a `components` folder inside the `src` folder.

## Step 2

- Create `Product.js` inside the `src/components` folder.
- inside the `Product.js` file make a functional component with same name as the file.
- Use the values off of the `props` object passed into the function to render a product.
  - All the properties about the product will be on props.item.`property`, it may be a good idea to destructure those values.
  - (At this moment we are not passing down props but we will in the next step):
    - Use an `img` element for the product's `imageUrl`.
    - Use a `h4` element for the product's `title`.
    - Use a `p` element for the product's `description`.
    - Use a `p` element for the product's `price`.
    - Use a `button` element that says "Add to Cart":
      - Add an `onClick` handler that calls `addToCart` off of `props`.
      - Remember to pass in the product as an `argument`.

_The `JSX` for `src/components/Product.js` is almost identical to the map in `src/App.js`_

<details>

<summary> Detailed Instructions </summary>
<br />

Let's begin by creating a new file called `Product.js` inside of the `src/components` folder and create a `functional component` called `Product` inside of it. Make sure it includes props in its parameters.

```js
import React from "react";

export default function Product(props) {}
```

Now that we have our `functional component` we are going to make some assumptions here. This `component` should expect to receive two `props`. One `prop` called `item` which will be a `product object` and another `prop` called `addToCart` which will be the `addToCart method` from `src/App.js`. With these assumptions, let's start by destructuring them off of the `props` argument.

```js
import React from "react";

export default function Product(props) {
  const { item, addToCart } = props;
}
```

With those assumptions out of the way, the `JSX` we need is almost exactly the same as the `JSX` we are already using in `src/App.js`. Let's move that `JSX` over into the `component` to start.

```js
import React from "react";

export default function Product(props) {
  const { item, addToCart } = props;

  return (
    <div key={item.id} className="product">
      <img src={item.imageUrl} />
      <div className="product-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => this.addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
```

Now we can start taking away the pieces of code that don't make sense in this file. For starters, we no longer need a `key` on our most parent `div` because we aren't executing a map inside of `src/components/Product.js`. We can also strip away the `this` from `this.addToCart(item)` since that method is now being passed down as a prop.

```js
import React from "react";

export default function Product(props) {
  const { item, addToCart } = props;

  return (
    <div class="product">
      <img src={item.imageUrl} />
      <div className="product-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
```

</details>

### Solution

<details>

<summary> <code> src/components/Product.js </code> </summary>
<br />

```js
import React from "react";

export default function Product(props) {
  const { item, addToCart } = props;

  return (
    <div class="product">
      <img src={item.imageUrl} />
      <div className="product-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
```

</details>

## Step 3

- Open `src/App.js`.
- Import the `Product` component.
- Scroll down to the `products section`:
  - Replace the current map's `JSX` with rendering a `Product component`.
  - Remember to pass down an `item` and `addToCart prop`.
- Bind the correct context of `this` to `addToCart` in `src/App.js`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by opening `src/App.js` and `import` the `Product` component.

```js
import React, { Component } from "react";
import Product from "./components/Product";
import "./App.css";

export default class App extends Component {
...
```

Now that we have access to the `Product` component, we can replace the `JSX` in the `map` for our `products section`. Remember that the `Product` component is expecting an `item` and `addToCart prop`. Also, we will still need to use a `key prop` here since we are inside a map.

```js
<section className="products">
  <h1>Products</h1>
  <h2>Hats</h2>
  {this.state.hats.map(item => (
    <Product key={item.id} item={item} addToCart={this.addToCart} />
  ))}

  <h2>Beach Gear</h2>
  {this.state.beachGear.map(item => (
    <Product key={item.id} item={item} addToCart={this.addToCart} />
  ))}
</section>
```

Lastly, we'll need to fix the context of `this` for the `addToCart` method. We can either bind it in the `constructor method`, use an `arrow function`, or turn the `addToCart` method into an `arrow function`.

```js
addToCart = item => {
  this.setState({
    cart: [...this.state.cart, item]
  });
};
```

</details>

### Solution

<details>

<summary> <code> src/App.js </code> </summary>
<br />

```js
import React, { Component } from "react";
import Product from "./components/Product";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150"
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ]
    };
  }

  addToCart = item => {
    this.setState({
      cart: [...this.state.cart, item]
    });
  };

  checkout = () => {
    this.setState({ cart: [] });
    alert("Purchase is complete!");
  };

  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <h2>Hats</h2>
          {this.state.hats.map(item => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}

          <h2>Beach Gear</h2>
          {this.state.beachGear.map(item => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: $
            {this.state.cart.reduce(
              (totalPrice, product) => (totalPrice += product.price),
              0
            )}
          </h2>
          <button onClick={this.checkout}>Checkout</button>
          {this.state.cart.map(item => (
            <div key={item.id} className="product">
              <img src={item.imageUrl} />
              <div className="product-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
```

</details>

## Step 4

- Use the values off of the `props` object passed into the function to render a product.
  - All the properties about the product will be on props.item.`property`, it may be a good idea to destructure those values.
  - (At this moment we are not passing down props but we will in the next step):

- Create `CartItem.js` inside the `src/components` folder.
- inside the `CartItem.js` file make a functional component with same name as the file.
- Use the values off of the `props` object passed into the function to render a product.
  - All the properties about the product will be on props.item.`property`, it may be a good idea to destructure those values.
  - (At this moment we are not passing down props but we will in the next step):
    - Use an `img` element for the `product`'s `imageUrl`.
    - Use a `h4` element for the `product`'s `title`.
    - Use a `p` element for the `product`'s `description`.
    - Use a `p` element for the `product`'s `price`.
- Open `src/App.js`.
- Import the `CartItem component`.
- Scroll down to the `cart section`:
  - Replace the current map's `JSX` with rendering a `CartItem component`.
  - Remember to pass down an `item prop`.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by creating a new file called `CartItem.js` inside of the `src/components` folder and create a `functional component` called `CartItem` inside of it.

```js
import React from "react";

export default function CartItem(props) {}
```

Just like we did earlier, we'll destructure `item` off of `props` and then `render` the `JSX` from the `cart section`'s map in `src/App.js`. We'll then strip away the `key prop` since we are not mapping inside of `CartItem`.

```js
import React from "react";

export default function Product(props) {
  const { item } = props;

  return (
    <div class="product">
      <img src={item.imageUrl} />
      <div className="product-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}
```

Now that our `CartItem` component is ready, let's open `src/App.js` and `import` it.

```js
import React, { Component } from "react";
import Product from "./components/Product";
import CartItem from "./components/CartItem";
import "./App.css";

export default class App extends Component {
...
```

Now that we have access to the `CartItem` component, we can replace the `JSX` in the `map` for our `cart section`. Remember that the `CartItem component` is expecting an `item prop`. Also, we will still need to use a `key prop` here since we are inside a map.

```js
<section className="cart">
  <h1>Cart</h1>
  <h2>
    Total: $
    {this.state.cart.reduce(
      (totalPrice, product) => (totalPrice += product.price),
      0
    )}
  </h2>
  <button onClick={this.checkout}>Checkout</button>

  {this.state.cart.map(item => (
    <CartItem key={item.id} item={item} />
  ))}
</section>
```

</details>

### Solution

<details>

<summary> <code> src/CartItem.js </code> </summary>

```js
import React from "react";

export default function CartItem(props) {
  const { item } = props;

  return (
    <div class="product">
      <img src={item.imageUrl} />
      <div className="product-info">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}
```

</details>

<details>

<summary> <code> src/App.js </code> </summary>

```js
import React, { Component } from "react";
import Product from "./components/Product";
import CartItem from "./components/CartItem";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150"
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ]
    };
  }

  addToCart = item => {
    this.setState({
      cart: [...this.state.cart, item]
    });
  };

  checkout = () => {
    this.setState({ cart: [] });
    alert("Purchase is complete!");
  };

  render() {
    return (
      <div className="App">
        <section className="products">
          <h1>Products</h1>
          <h2>Hats</h2>
          {this.state.hats.map(item => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}

          <h2>Beach Gear</h2>
          {this.state.beachGear.map(item => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
          ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: $
            {this.state.cart.reduce(
              (totalPrice, product) => (totalPrice += product.price),
              0
            )}
          </h2>
          <button onClick={this.checkout}>Checkout</button>

          {this.state.cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </section>
      </div>
    );
  }
}
```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
