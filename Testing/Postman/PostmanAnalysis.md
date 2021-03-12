
# __An Analysis of Postman__

## __Document History__

| Date | Description |
| ------------- | -------------- |
| 3/11/2021 | Initial Creation of Document |

## __Document Author__

* Brandin Goldsberry - goldsberry.brandin@outlook.com / bgoldsberry@student.neumont.edu

## __What is Postman?__

Postman is a testing suite for API frameworks. It is a robust application for requesting all HTTP requests. This industry standard is one of the most widely used applications for ensuring that your API is functioning, or just learning how an API works before using it in production.

## __Technical Specifications__

Postman supports Mac, Windows, and Linux operating systems, and has 32-bit and 64-bit releases for both Windows and Linux. It can run virtually in any setup and smoothly integrates into any development workflow.

## __Samples__

This industry standard application has a number of examples on their website and of course on sites like Stack Exchange. The exmaple this test was run on is simple:

1) Grab a list of movies with the query "Fear and Loathing."
2) Grab the Second result.
3) Get the lead actor of the cast.
4) Get a list of all movies the actor was present for.
5) Visualize the results in percentage of genre for all films.

## __Conventions__

The first thing to set up is a collection in order to have common variables between tests and to have tests run in a series with the press of a button.

Each test in said collection is then given a URL to receive data from. There is also a pre-request script that could be run before a request to set some variables beforehand if needed. After the request is run the Test section is run, which is a JavaScript script that runs like normal. The tests are run after the script is finished.  

One of the best things about Postman is the built-in assertions, where the user can assert tests and have multiple pass/fail responses per request. These are inegral parts of the tests and you can have multiple assertions per test and multiple tests per request.

A small request test script:  

```JavaScript
pm.test('Success', () => {
    pm.response.to.have.status(200);
    pm.response.to.be.ok;
})

pm.test('Set First Movie Variable', () => {
    pm.variables.set("first_movie", pm.response.json().results[1].id);
    pm.expect(pm.variables.get("first_movie")).to.equal(1878);
})
```

This uses the strange "English-like" syntax of chaining together multiple property accessors, but then also uses functions for certain assertions. It can be a bit clunky at times, but not needing external libraries is nice.  

The other great part of Postman is having visualizations for data, where it can render HTML using the HandlebarJS library for templating.  

```JavaScript
var template = `
<canvas id="myChart" width="auto" height="100%"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script>
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            {{#each labels}}
                "{{this}}",
            {{/each}}
        ],
        datasets:[{
            data: [{{data}}],
            backgroundColor: [
                {{#each bgColors}}
                    "{{this}}",
                {{/each}}
            ]
        }]
    }
});
</script>
`
//Code cut here for brevity

pm.visualizer.set(template, {
    data,
    labels,
    bgColors
})
```

This particular example here uses ChartJS to show a donut chart for the percentage of the movies. The website has this an example but does not tell you much on how to actually set it up. Just like a regular HTML page you need to import the required scripts, but since we can't make external JS files ourselves we have to write our script in a `<script>` tag.  

One of the issues with the visualizations is that it does not render in the collection runner, only in the standard single request runner.  

## __Conclusions__

Postman is a standard for a **good** reason. It can create several workspaces, environments, and collections of requests, with each group being able to have common scripts and requests but different in each execution. You could feasibly have multiple projects, with multiple APIs each, with hundreds of collections, each sorted and runnable in chunks. There are things that are difficult to use about it, but once you learn them you have a powerhouse of an API development tool.  

|  | Ease of Use | Tools | Features | Site Variety | Framework Support | Documentation |
| - | - | - | - | - | - | - |
| Rating | 3 | 5 | 4 | 5 | 5 | 4 |

> ### **Final Rating** 4.2/5

\* Site variety indicates how many sites are testable  
\*\* Framework Support indicates the intricacies in which frameworks are testable
