import React from 'react';
import createReactClass from 'create-react-class';
import './style/About.less';

const About = createReactClass({
    render() {
        return (
            <div className="about-app">
                <h2 className="about-title">
                    About Page
                </h2>
                <section className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptatibus magni est veniam a doloremque dicta velit ex rerum voluptates ullam dignissimos facilis nisi, culpa labore alias optio officia eum!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quisquam odit consequatur, perferendis inventore error, sit quod possimus? Iusto, modi. Laboriosam dolore quidem consectetur recusandae iste fuga consequatur, necessitatibus aperiam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi non, fugit vel quaerat deserunt quas laboriosam corporis dignissimos. Nam pariatur sint eum neque repellat quas, autem incidunt minima facilis expedita!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, numquam esse quae quibusdam magnam provident accusamus beatae, tempore minus rerum rem optio. Facere, neque error. Temporibus ullam eaque sapiente velit.</p>
                </section>
            </div>
        );
    },
});

export default About;
