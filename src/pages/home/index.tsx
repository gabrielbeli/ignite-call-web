import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'

import calendarImage from '../../assets/calendar.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre!
        </Text>
      </Hero>
      <Preview>
        <Image
          src={calendarImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando a alicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
