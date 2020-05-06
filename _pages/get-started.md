---
title: Get started
---

This is a demonstration of using Jekyll to write documentation for software.

## One-minute demo

The following html webpage:

<https://kaba2.github.io/vector-spaces>

was produced from a [Jekyll][Jekyll] file like this:

![](images/vector-space.png)

[Jekyll]: https://jekyllrb.com/

I want to write documentation in this way. It is _fun_, an absolute necessity for maintaining up-to-date documentation. Such documentation is to be stored in a git-repository.

Jekyll is a static site generator; it converts such extended Markdown files to html files, which can then be placed anywhere. A git post-commit hook can be set up to regenerate the site on every commit to the repository. This demo is located on Github Pages, which provides just such a service.

The style of the site is determined by css files.

When on your local computer, Jekyll can generate the site on the fly as you modify it.

## Try it yourself

* [Install Ruby][Ruby]
* Install Jekyll from command line:
    
        gem install jekyll bundler
* Clone this repository to appropriate directory (e.g. `c:\work`):

        git clone https://github.com/kaba2/kaba2.github.io.git devdocs
        cd devdocs
* Run the following (I don't know why this is required, but live-reload won't work without it):

        gem uninstall eventmachine
        gem install eventmachine --platform ruby
* Start a Jekyll-server to generate the site on realtime. 

        jekyll serve --livereload
* The `--livereload` option refreshes your browser automatically on each change.
* Open the browser, and visit <http://localhost:4000/get-started>.
* Create a new file `_pages/going-bananas.md`, and write the following in it:

    {% highlight Markdown %}
    ---
    title: Going bananas
    parent: get-started.md    
    ---

    Bananas won't go bananas.
    {% endhighlight %}
* Visit <http://localhost:4000/going-bananas>. You should see something like this:

    ![](images/bananas1.png)
* Notice how the link to the parent-page "Get started" is added automatically; this is because of how the default-layout is set up.
* Click on the link to visit the "Get started" page. At the bottom of the page, you should see something like this:

    ![](images/bananas2.png)
* Notice how the link to the child-page "Going bananas" is added automatically. This is again part of the default-layout.
* Go to your editor again, and edit `going-bananas.md` to add some cool lists, tables, and code:

        ---
        title: Going bananas
        parent: get-started.md    
        ---

        Bananas won't go bananas, because
        * they are yellow, and
        * they taste good.

        Let's put that into a table:

        Banana property | Value
        ----------------|---------
        Color           | Yellow
        Taste           | Good
        Mystical        | $$ ax^2 + bx + c = 0 $$
        Goes bananas    | No

        ``` c#
        public static UInt16 ReverseBytes(UInt16 value)
        {
        return (UInt16)((value & 0xFFU) << 8 | (value & 0xFF00U) >> 8);
        }
        ```
* Visit <http://localhost:4000/going-bananas>. You should see something like this:

    ![](images/bananas3.png)

[Ruby]: https://rubyinstaller.org/
