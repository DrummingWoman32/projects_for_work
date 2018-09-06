using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Animals;

namespace Animals
{
    class AnimalsMain
    {
        static void Main(String[] args)
        {
            /* Animals class needs at least two constructors, a struct, at least 5 member variables, methods or functions, private variables, getter and setter, and instances of the class.
             Main method has to be in different class (other file). Use enum for the classification of the animal*/

            //Animals elephant = new Animals(elephant, mammal, Rose, grassland, herbivore, false, diurnal);    //so it's like we've come across an animal, we are observing her or him, and then we are deciding to film her/him

            Animals animal = new Animals();
            Console.WriteLine("What is the species name of the animal (elephant, duck, or what)? : ");
            animal.setSpeciesName(Convert.ToString(Console.ReadLine()));

            Console.WriteLine();

            Console.WriteLine("Animal type (mammal, bird, reptile, etc.)? : ");
            String theType;
            theType = Convert.ToString(Console.ReadLine());
            Animals.animalTypes animalType = (Animals.animalTypes)Enum.Parse(typeof(Animals.animalTypes), theType);
            animal.setAnimalType(animalType);

            //habitats habitat = (habitats)Enum.Parse(typeof(habitats), habitatValue);

            Console.WriteLine();

            /*Console.WriteLine("Name of animal? : ");
            animal.setName(Convert.ToString(Console.ReadLine()));

            Console.WriteLine();*/

            Console.WriteLine("Habitat? : ");
            String theHabitat;
            theHabitat = Convert.ToString(Console.ReadLine());
            Animals.habitats habitat = (Animals.habitats)Enum.Parse(typeof(Animals.habitats), theHabitat);
            animal.setHabitat(habitat);

            Console.WriteLine();

            Console.WriteLine("What type of eater is this animal? : ");
            String eatingType;
            eatingType = Convert.ToString(Console.ReadLine());
            Animals.Eaters typeOfEater = (Animals.Eaters)Enum.Parse(typeof(Animals.Eaters), eatingType);
            animal.setTypeOfEater(typeOfEater);

            Console.WriteLine();

            Console.WriteLine("Has this animal been filmed yet? : ");
            String isFilmed;
            isFilmed = Convert.ToString(Console.ReadLine());


            if(isFilmed == "yes" || isFilmed == "Yes")
            {
                animal.setFilmed(true);
            }

            else
            {
                animal.setFilmed(false);
            }

            Console.WriteLine();

            Console.WriteLine("Is this creature diurnal, nocturnal, crepuscular, or cathemeral? : ");
            String activityTimeType;
            activityTimeType = Convert.ToString(Console.ReadLine());
            //habitats habitat = (habitats)Enum.Parse(typeof(habitats), habitatValue);
            Animals.active whenActive = (Animals.active)Enum.Parse(typeof(Animals.active), activityTimeType);
            animal.setWhenActive(whenActive);

            Console.WriteLine("-------------------------------------------------------------");

            Console.WriteLine();

            //display the new animal

            animal.DisplayAnimal(animal);

            Console.WriteLine();

            animal.Fly(animal);
            animal.Swim(animal);
            animal.filmAnimal(animal);


            Console.ReadKey();
                
             
        }
    }
}
