import create from 'zustand';
import { persist } from 'zustand/middleware';
import userData from './data.json';
import produce from 'immer';

export const useIntro =  create(
    persist(
      (set) => ({
        intro: userData.basics,
        update: (type:string, value:string) => 
          set(produce((state:any) => {
            
            if (type.includes('.')) {
            
              const [parent, child] = type.split('.');
              state.intro[parent][child] = value;
            } else state.intro[type] = value;
          })),
          updateProfiles: (type: string, field: string, value: string) =>
          set(
            produce((state: any) => {
              const object = state.intro.profiles.find((profile:any) => profile.network === type);
  
              if (object) {
                object[field] = value;
                return;
              }
  
              state.intro.profiles.push({ network: type, [field]: value });
            })
          ),
        
      }),
{
    name: 'sprb-intro',
  }));
  export const useSkills = create(
    persist(
      (set) => ({
        languages: userData.skills.languages,
        frameworks: userData.skills.frameworks,
        libraries: userData.skills.libraries,
        databases: userData.skills.databases,
        technologies: userData.skills.technologies,
        practices: userData.skills.practices,
        tools: userData.skills.tools,
  
        reset: (data = userData.skills) => {
          set({
            languages: data.languages,
            frameworks: data.frameworks,
            libraries: data.libraries,
            databases: data.databases,
            technologies: data.technologies,
            practices: data.practices,
            tools: data.tools,
          });
        },
  
        add:(type:any,name='',level=1) => {
          set((state:any) => {
            if (state[type].some((skill:any) => skill.name === '')) return;

             state[type] = [...state[type]];
             state[type].push({name,level})
          })
        },
        update:(type: string, index: number, key: 'name' | 'level', value: string | number) => {
          set((state:any) => {
            console.log(type,key,value)
            state[type] = [...state[type]];
            state[type][index][key] = value;
          })
        },
        purge: (type: string, index: number) =>
        set((state: any) => {
          state[type] = state[type].filter((_, ind:any) => index !== ind);
        }),
      }),
      {
        name: 'sprb-skills',
      }
    )
  );