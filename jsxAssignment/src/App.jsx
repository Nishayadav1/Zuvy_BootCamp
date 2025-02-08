import './App.css'
function App() {
  const title = "React JSX Demonstration";
  const description = "This example showcases all JSX and curly braces rules.";
  const listItems = ["Item 1", "Item 2", "Item 3"];
  const user = { name: "John Doe", age: 30 };
  const currentYear=new Date().getFullYear()

  return (
    <>
      <div style={{
              padding: "1rem",
              border:"5px solid",
              fontWeight:'bold'
      }}>
      <h1 style={{color:"green"}}>{title}</h1>
      <p>{description}</p>

      <p>{user.age>18 ? `Welcome ${user.name}` : "You must be 18 or older to view this content."}</p>
      
      <ul>
        {
          listItems.map((e,i)=>{
            return <li key={i}>{e}</li>
          })
        }
      </ul>

      <img src="./img" alt={`Placeholder for ${user.name}`}/>

      <p>Current Year ={currentYear}</p>
      </div>
    </>
  )
}



export default App



// Use these variables and create the following react application


//   const title = "React JSX Demonstration";
//   const description = "This example showcases all JSX and curly braces rules.";
//   const listItems = ["Item 1", "Item 2", "Item 3"];
//   const user = { name: "John Doe", age: 30 };


// 1. In h1 and p tags use the title and description variable
// 2. If the users age is greater than 18 show the following message "Welcome user_name" otherwise show "You must be 18 or older to view this content."
// 3.  Render the items in the listItems array on browser
// 4. Create and image element and use the users names as alt attributes value
// 5. Print the current year using the new Date() object.

// Also style the page using inline styles