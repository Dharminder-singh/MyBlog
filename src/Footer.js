const Footer = () =>{
    const date = new Date()
    return(
        <>
        <footer>
           <h2>Copyright &copy; {date.getFullYear()}</h2>
        </footer>
        </>
    )

}
export default Footer