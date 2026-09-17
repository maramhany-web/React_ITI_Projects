# *HTML REPORT*
# What We Are Talking about in this Report?
1. HTML and How it started
2. HTML Basics
3. Text and Content in HTML
4. Multimedia
5. Tables
6. Lists
7. Forms
7. Display and Layout
8. Types of Web Design 
9. HTML Document Structure كان المفروض تبقى فوق بس نستيها 

# **1. HTML and How it started**
## 1.1 what is HTML?
HTML is the standard markup language for creating Web pages.
## 1.2 Who Created HTML?
HTML was created by Sir Tim Berners-Lee , he invented the Www(World Wide Web) in 1989 and he development the first version of HTMl
## 1.3 the most versions of HTML
1. HTML
2. HTML2.0
3. HTML4.1
4. HTML5 (introduction modern HTML)
## How browser display the website?
1. html parsing --> Analysis HTML code
2. Render --> Processing(from tag to element) 
3. Layout --> Detemine the position of each element
4. paint/display --> display the elements 

# **2. HTML Basics**
## 2.1 DOM Tree (Document Object Model)
 Relationshipe between elements are represent as parent and child nodes ...*HOW*?
 For example:
 ```html
<html>
    <body>
        <h1>Hello World</h1>
        <p>Welcome to my website.</p>
    </body>
</html>
```
*`<html>` parent , `<body>` child and `<h1>`,`<p>` are child of `<body>`

## 2.1 HTML Element
opening tag, content, and a closing tag <...>
Example:
```html
 <p>Maram</p>
 ```
## 2.3 HTML Tags
HTML tags are keywords enclosed in angle brackets < > that tell the browser how to structure or display content.
Example:
```html
      <h1>Welcome</h1>
      <p>This is a paragraph.</p>
```
Common HTML tags include:
- `<h1>` to `<h6>` → Headings
- `<html>` → root element
- `<body>` → body element (user)
- `<head>` →  head element (browser)
- `<ul>` → Unordered list
- `<li>` → List item

## 2.4 HTML Attributes
provide additional information about element and they are written inside opening tag.
example:

```html
<img src="image.jpg" alt="A flower">
```
src specifies the image source.
alt provides alternative text if image does not exit.
### Each Element in HTML must has tags and Attributes optional to give more details ... we will talking about it deeply in Remaining topics

## 2.5 HTML Comments
notes that are ignored by the browser during render and do not display.
```html
 <!-- Maram --> 
```
# **3. Text and Content in HTML**
## 3.1 Headings
Headings are subtitles display on a website
How to display?
`<h1>` , `<h6>` tags sorted  Descending.
Example:
```html
<h1>Welcome to My Website</h1>
<h2>About HTML</h2>
```
## 3.2 Paragraphs 
`<p>` element define a paragraph 
Example:
```html
<p>content on web pages.</p>
```
### to separate between paragraphs or any elements
- `<hr>` --> horizontal rule
- `<br>` --> line break
## 3.3 Formatting
| Tag | Definition | Example |
|-----|------------|---------|
| `<sup>` | Superscript text | `X<sup>2</sup>` |
| `<sub>` | Subscript text | `H<sub>2</sub>O` |
| `<del>` | Deleted text | `<del>Old Price</del>` (dash line) |
| `<ins>` | Inserted text | `<ins>New Text</ins>` (underline) |
| `<mark>` | Highlighted text | `<mark>Important</mark>` |
| `<abbr>` | Abbreviated text | `<abbr title="HyperText Markup Language">HTML</abbr>` |
| `<em>` | Emphasized text | `<em>Important</em>` |
| `<strong>` | Important text | `<strong>Warning!</strong>` |
| `<b>` | Bold text | `<b>Bold Text</b>` |
| `<blockquote>` | Long quotation | `<blockquote> Aphorisms</blockquote>` |
| `<q>` | Short quotation | `<q>text</q>` |

## 3.4 Links
the `<a>` tag used to create links to other website
Example:
```html 
<a href="https://example.com">Visit Website</a> 
```
### favicon 
is icon displayed in the browser tab
Example:
```html
<link rel="icon" href="favicon.png">
```
# **4. MULTIMEDIA**
elements for adding multimedia content such as images, videos, and audio to web pages.
## 4.1 Images
```html
 <img src="image.jpg" alt="A beautiful image" width="500"> 
```
## 4.2 Videos
```html 
<video controls width="500"> <source src="video.mp4" type="video/mp4"> </video> 
```
## 4.3 Audio
```html
<audio controls> <source src="audio.mp3" type="audio/mpeg"> </audio>
```
### 4.4 main multimedia tags 
- `<img>` → Displays images
- `<video>` → Displays videos
- `<audio>` → Plays audio
 ### 4.5 Attributes of multimedia files
- src → location of a file relative to the HTML file in machine
- alt → provides alternative text if file does not display
- width → sets the file width.
- controls → adds video or audio controls
- type → specifies the audio format

# **5. TABLES**
HTML Tables are used to display data in Rows and columns
Example:
```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>Maram</td>
        <td>20</td>
    </tr>
    <tr>
        <td>hany</td>
        <td>20</td>
    </tr>
</table>
```
## 5.1 Main Table Tags
- `<table>` → creates the table
- `<tr>` → creates a table row
- `<th>` → creates a header cell
- `<td>` → creates a data cell
## 5.2 Attributes of table
- border → adds a border around the table.
- cellpadding → adds space inside cells.
- cellspacing → adds space between cells.
- width → sets the table width.
- colspan → merges multiple columns
- rowspan → merges multiple rows

# **6. LISTS**
```text
                    HTML Lists
                         │
             ┌───────────┴───────────┐
             │                       │
      Unordered List          Ordered List
           `<ul>`                  `<ol>`
             │                       │
        Bullet Points             types(num,letter)
             │                       │
           `<li>`                  `<li>`
```

## 6.1 Unordered List `<ul>`

* HTML
* CSS
* JavaScript
**Code Example:**
```html
<ul type="square">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```
## 6.2 Ordered List `<ol>`
1. HTML
2. CSS
3. JavaScript
**Code Example:**
```html
<ol type="A" start="1">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

### 6.3 **List Attributes:**
* `type` → specifies the bullet or numbering style.
* `start` → specifies the starting number for an ordered list.
* `reversed` → reverses the order of an ordered list.
 # **7.FORMS**
HTML forms are used to collect information from users, such as names, emails, passwords, and other data.
## 7.1 Form Elements
- `<form>` → Creates a form.
- `<label>` → Defines a label for input.
- `<input>` → Creates an input field.
- `<textarea>` → Creates a multi-line text field.
- `<select>` → Creates a dropdown list.
- `<option>` → Defines an option in a dropdown list.
- `<button>` → Creates a clickable button.
Example:
```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name">

    <label for="country">Country:</label>
    <select id="country">
        <option>Egypt</option>
        <option>USA</option>
    </select>

    <button type="submit">Submit</button>
</form>
```
## 7.2 Form Attributes
- action → Specifies where form data is sent.
- method → Specifies how data is sent (GET or POST).
- target → Specifies where to display the response.
## **7.3 INPUT TYPES**
### Input Types

| Type | Description |
|------|-------------|
| `text` | Text input |
| `password` | Password input |
| `email` | Email input |
| `number` | Number input |
| `radio` | Single choice |
| `checkbox` | Multiple choices |
| `date` | Date picker |
| `file` | File upload |
| `submit` | Submit button |
| `reset` | Reset button |
| `button` | Clickable button |
| `hidden` | Hidden input |
| `color` | Color picker |
| `range` | Range slider |
| `search` | Search field |
| `tel` | Telephone input |
| `url` | URL input |
| `image` | Image button | 

### 7.4 Input Attributes
- `type` → Defines the input type.
- `name` → Defines the input name.
- `value` → Specifies the initial value.
- `placeholder` → Displays a hint inside the input (*optional*).
- `class` → Links the element to CSS styles.
- `id` → Links the input to a `<label>`.
- `list` → Links the input to a `<datalist>`.

### **7.5 Fieldset**

The `<fieldset>` element is used to group related form elements OR lables of inputs together.
Example:
```html
<fieldset>
    <legend>Personal Information</legend>

    <label>Name:</label>
    <input type="text">

    <label>Email:</label>
    <input type="email">
</fieldset>
```
# **8. Display and Layout**
### 8.1 Block Elements
Block elements start on a new line and take the full available width.
Example:
```html
<div>This is a block element.</div>
```
The `<div>` element is a block-level container contain a lit of elements.

### 8.2 Inline Elements
Inline elements do not start on a new line and take only the required width.
Example:
```html
<span>This is an inline element.</span>
```
The `<span>` element is an inline container contain at least one element for design.

## **8.5 Semantic Elements**
Semantic elements clearly describe the meaning and purpose of their content.
Examples:
- `<header>`
- `<nav>` 
- `<main>` 
- `<section>`
- `<article>`
- `<footer>`

## **8.6 Non-Semantic Elements(STRUCTURE)**
Non-semantic elements do not clearly describe the meaning of their content. The most common examples are `<div>` and `<span>`.

# **8. Types of Web Design**
### 8.1 Static Website
A static website displays fixed content
### 8.2 Dynamic Website
A dynamic website can display updated content based on user interaction, data, or other conditions
### 8.3 Responsive Website
A responsive website changes its layout based on the device, such as a mobile, tablet, or computer, without messing up the design.

# **9. HTML DOCUMENT STRUCTURE**
An HTML document has a basic structure
### Basic HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Webpage</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is my webpage.</p>
</body>
</html>
```
### 9.2 Main Parts
- `<!DOCTYPE html>` → Defines the HTML version.
- `<html>` → The root element of the document.
- `<head>` → Contains information about the page.
- `<title>` → Defines the page title.
- `<body>` → Contains the visible content of the page.

### 9.1 Meta Tags
**Example:**

```html
<meta charset="UTF-8">
<meta name="description" content="HTML Report">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
















 