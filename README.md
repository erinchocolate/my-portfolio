# Personal Website

Live website: [https://meiqiaochen.co.nz](https://meiqiaochen.co.nz/)

Demo:

![demo1](https://github.com/erinchocolate/my-portfolio/blob/main/src/assets/project/portfolio.gif)

Blog: [https://meiqiaochen.blog/how-i-build-website-with-cool-3d-models](https://meiqiaochen.blog/how-i-build-website-with-cool-3d-models)

### 💡How I got the idea

I was blown away when I first saw Bruno Simon's website. It's wild! The site's like a video game where you drive a 3D toy car to explore his work and experiences. The whole thing is in 3D, and I was amazed and thought, "I want some 3D stuff on my site too.”

[Bruno Simon - Creative developer](https://bruno-simon.com/)

After some googling, I discovered that Bruno's 3D magic came from this thing called Three.js. It's a toolkit that lets you make and show off 3D graphics in your browser.

[Three.js – JavaScript 3D library](https://threejs.org/)

### 🏗️What I want to build

I've always wanted to make my own website. And after wrapping up my Master's and internship, I finally had the time to build it. I also wanted to play around and get better with React and found two packages that can help me add 3D models in a React app.

[React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

[GitHub - pmndrs/drei: 🥉 useful helpers for react-three-fiber](https://github.com/pmndrs/drei#readme)

My idea was to build a one-page app to demonstrate my skills, experience and projects with React and some 3D models. Later I added more features like contact form and visitor count.

### 🎮Technology I used in the project

- **Vite**: build tool and development server
- **React**: front-end library to build use interfaces
- **Tailwind CSS**: utility-first CSS framework
- **React-three-fiber**: React renderer for three.js
- **Drei**: useful helpers and abstractions for react-three-fiber
- **framer-motion:** animation and gesture library for React
- **EmailJS**: service that allows users to send emails directly from their JavaScript apps
- **Docker**: a platform designed to develop, ship, and run applications inside containers

I also used some cloud technologies:

- I used AWS Lambda, DynamoDB and API Gateway to record visitor counts.
- I used Azure Container Registry and Web App Services to deploy my app.

I downloaded free 3D models from this website:

[Download Free 3D Models - Royalty Free](https://sketchfab.com/features/free-3d-models)

### 🎲How to add and use 3D models in the code

Below is a 3D room where users can rotate it on my website:

![Room.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6693b30-64e0-4ee1-a370-b4803aa09a05/1b72a979-5d2c-4b49-ab8d-f0733d655131/Room.gif)

To achieve this,  First, we can create a `RoomCanvas` component, which is responsible for encapsulating the `Room` within a 3D canvas

```jsx
const RoomCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Room isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
```

- **`<Canvas>`**: The primary **`react-three-fiber`** component establishing the 3D rendering context.
- **`<Suspense>`**: A React built-in component that lets your components “wait” for something before rendering. Here, it's waiting for the room model to load, and while waiting, it shows a fallback loader (**`<CanvasLoader />`**).
- **`<OrbitControls>`**: It provides a way to control the camera in the scene. Here, zooming is disabled, and the angle is restricted.
- **`<Preload all />`**: Preloads all resources, ensuring they are loaded and cached.

Then, we create a `Room` component so we can display our 3D room model with associated lighting.

```jsx
const Room = ({isMobile}) => {
  const room = useGLTF('./room/scene.gltf');

  return (
    <mesh><hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={room.scene}
        scale={isMobile ? 0.007 : 0.01}
        position={isMobile ? [0, -2, -1] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.01, -0.1]} />
    </mesh>
  );
}
```

- **useGLTF('./room/scene.gltf')**: A hook from the **`@react-three/drei`** library, that asynchronously loads a GLTF 3D model from a given path.
- **`<mesh>`**: Represents a 3D object in the scene.
- **`<hemisphereLight />`**: A soft overhead light.
- **`<pointLight />`**: Emits light uniformly in all directions from a single point.
- **`<spotLight />`**: A directed light that can cast shadows, with attributes defining its position, angle, shadow quality, etc.
- **`<primitive>`**: A generic element from **`react-three-fiber`** that can represent any three.js object. Here, it's used to render the room model. Depending on whether the device is mobile or not, the scale and position of the room are adjusted.

I used a similar method to add the fox model, but I added `Float` to make the fox move:

![fox.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/b6693b30-64e0-4ee1-a370-b4803aa09a05/b3e05ed4-42af-4b9f-a9c2-5a6620dabc3c/fox.gif)

```jsx
<Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <hemisphereLight intensity={0.75} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.3}
          penumbra={1}
          intensity={3}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive object={fox.scene} scale={0.5}/>
      </mesh>
    </Float>
```



