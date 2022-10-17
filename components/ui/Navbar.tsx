import { useTheme, Text } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0rem 1rem',
        backgroundColor: '#2A272A',


    }}>

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: '7px',
        }}>
        <Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png`}
          alt="Pokemon"
          width={50}
          height={50}

        />
        <Text color="white" h3><span style={{
          fontWeight: 'bold',
          fontSize: '2rem',
        }}>P</span>okémon</Text>

        </div>

        

        <Text>Favoritos</Text>

    </div>
  )
}