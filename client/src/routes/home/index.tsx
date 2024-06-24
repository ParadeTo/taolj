import {Image, List} from 'antd-mobile'
import {gql, useQuery} from '@apollo/client'

interface Item {
  id: number
  name: string
  url: string
}

function Home() {
  const {loading, error, data} = useQuery<{items: Item[]}>(
    gql`
      {
        items(page: 1, pageSize: 1) {
          id
          name
          url
        }
      }
    `
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <List header='商品列表'>
      {data?.items.map((item) => (
        <List.Item
          key={item.name}
          prefix={
            <Image
              src={item.url}
              style={{borderRadius: 20}}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description={item.name}>
          {item.name}
        </List.Item>
      ))}
    </List>
  )
}

export default Home
