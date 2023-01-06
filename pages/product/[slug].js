import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>This is a {slug}</p>
}

export default Product