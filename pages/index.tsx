import { useState } from "react";
import { Container } from "../components/styles/Container";
import { Navbar } from "../components/styles/NavBar";
import { Spacer } from "../components/styles/Spacer";

export default function Home() {
  const [scale, setScale] = useState<false | string>(false)
  const rescale = () => {
      setScale('scale-x-50 scale-y-50')
  }

  const val = 50
  return (
    <div className={`w-screen h-screen bg-red-500 ${ typeof window !== "undefined" && scale ? 'scale-x-50 scale-y-50' : ''}`}>
    <Navbar />
    <Container>
      <Spacer size={5}/>
      <h1>Lorem Ipsum</h1>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non ipsum vel erat posuere commodo. Cras mattis vel ligula in fermentum. Fusce sit amet tortor eget quam fringilla molestie ac sodales sapien. Phasellus neque ante, consequat ac tortor rhoncus, ornare finibus augue. Fusce et faucibus ante. Suspendisse at efficitur justo, a sagittis odio. Ut tincidunt tincidunt finibus. Praesent mauris nisi, malesuada vitae tortor id, condimentum consectetur nisl. Cras nibh odio, iaculis eu orci ut, elementum hendrerit nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc porttitor consectetur massa, a mollis lacus condimentum sed. Aenean vulputate gravida libero sed vestibulum. Fusce venenatis in sapien non pellentesque. Sed urna lectus, imperdiet a ex a, tristique fringilla tellus. Vestibulum euismod nibh et nibh venenatis, quis laoreet ipsum maximus. Curabitur tincidunt ultrices turpis bibendum hendrerit.

Fusce eget mollis urna. Nam sapien purus, pharetra eget augue id, tempus volutpat sapien. Vestibulum vel eros dui. Aliquam ultricies nunc sed eleifend semper. Curabitur ut ornare diam. Phasellus auctor, ex at vulputate cursus, diam odio accumsan diam, vel consectetur nisl quam vel risus. Sed convallis orci vel venenatis fringilla. Donec at scelerisque est. In et tempus enim, non posuere neque. Phasellus ornare erat et purus rhoncus porta. Nulla elit mi, facilisis nec consequat sit amet, pulvinar nec neque. Cras feugiat neque id nisi porttitor, non euismod quam feugiat. Proin fringilla lectus massa, non ullamcorper nunc vulputate id. Nam vitae mattis metus, a accumsan risus. Suspendisse porta lacinia suscipit.

Donec tincidunt ipsum eget rutrum venenatis. Fusce finibus tempor lorem ac porttitor. Nunc aliquet facilisis pharetra. Pellentesque lacinia eleifend diam, eu tempus orci iaculis ac. Ut commodo sollicitudin vehicula. Suspendisse a efficitur ligula. Sed venenatis placerat consequat. Sed et convallis risus.
      </p>
      <button onClick={rescale}>scale</button>
    </Container>
    </div>
  )
}
