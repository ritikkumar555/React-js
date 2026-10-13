
export const Product = (props)=> {
    console.log(props);
  return (
    <article>
        <p>{props.title}</p>
        <p>{props.price}</p>
    </article>
  )
}

export default Product