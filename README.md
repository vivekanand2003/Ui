# 🔐 Login UI Form

A simple and responsive login user interface built using **HTML**, **CSS**, and **JavaScript**.
This project demonstrates form design, layout positioning, and basic form handling with JavaScript.

---

## 🚀 Features

* Clean login UI design
* Centered login card layout
* Username and password input fields
* Submit button with form handling
* JavaScript form submission event
* Console output of entered data

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (Flexbox & positioning)
* JavaScript (DOM & Events)

---

## 📂 Project Structure

```
Ui-main/
│── index.html
│── style1.css
│── data.js
│── task.txt
```

* **index.html** → Login UI structure
* **style1.css** → UI styling and layout
* **data.js** → Form submission logic
* **task.txt** → Notes / tasks

---

## 💡 How It Works

* User enters username and password
* Form submission is prevented from reloading page
* JavaScript reads input values
* Data is printed in browser console

Example logic:

```js
form.addEventListener("submit", function(event){
    event.preventDefault();
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value, pass.value);
});
```

---

## 🎨 UI Layout

* Full-screen background layer
* Center container panel
* Login card in middle
* Flexbox alignment

---

## ▶️ How to Run

1. Download or clone repository
2. Open `index.html` in browser
3. Enter username & password
4. Click login
5. Check browser console for output

---

## 📸 Screenshot
<img width="1366" height="608" alt="Screenshot 2026-02-22 132826" src="https://github.com/user-attachments/assets/764717d6-ada9-4fdd-ab24-a2437320987a" />

---

## 📘 Learning Purpose

This project helps beginners learn:

* UI layout with CSS
* Flexbox centering
* Form design
* JavaScript form events
* DOM element access

---


