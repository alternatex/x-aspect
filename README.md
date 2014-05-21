# &lt;x-aspect&gt;

A [X-Tag](http://www.x-tags.org) element for AOP with before, around, on, afterReturning, afterThrowing, after advice, and pointcuts.

> Maintained by [Gianni Furger](https://github.com/alternatex).

Wrapping [meld](https://github.com/cujojs/meld) by CujoJS team.

## Use Cases

- Logging
- Profiling
- Security
- Transactions

## Demo

> [Check it live](http://alternatex.github.io/x-aspect).

## Install

Install with [Bower](http://bower.io):

```sh
$ bower install --save x-tag-aspect
```

## Usage

1.  Import Web Components' polyfill:

    ```html
    <script src="dist/x-tags-components.js"></script>
    ```

2.  Import `meld`:

    ```html
    <script src="app/bower_components/meld/meld.js"></script>
    ```

3.  Import Custom Element:

    ```html
    <script src="dist/aspect.js"></script>
    ```

4.  Start using it!

    ```html
    <x-aspect origin="" source="console" function="log" advice="" condition="" trigger=""/>
    ```

## Examples

#### HTML

```html

<!-- Intercept console.log  -->
<x-aspect origin="" source="console" function="log" advice="" condition="" trigger=""/>

```

#### JavaScript

You can listen to a `aspect-changed` event for details about the aspect that was matched.

```javascript
document.addEventListener('aspect-changed', function (aspect) {
    console.log(aspect);
});
```

## Setup

In order to run it locally you'll need a basic server setup.

1. Install [Node.js](http://nodejs.org/download/)
2. Install [Grunt](http://gruntjs.com/):

    ```sh
    $ npm install --global grunt-cli
    ```
3. Install [Bower](http://bower.io/)
4. Install local dependencies:

    ```sh
    $ npm install && bower install
    ```

5. Run a local server and open `http://localhost:3001`.

    ```sh
    $ grunt connect
    ```

## Options

Attribute  | Options                   | Default              | Description
---        | ---                       | ---                  | ---
`origin`   | *object*                  | ``                   | -
`source`   | *object|function*         | ``                   | -
`function` | *function*                | ``                   | -
`advice`   | *string*                  | ``                   | -
`condition`| *boolean*                 | ``                   | -
`trigger`  | *event*                   | ``                   | -

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/webcomponents/element-boilerplate/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)

