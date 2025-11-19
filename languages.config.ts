export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        menu: {
          menu_open: 'Menu',
          menu_close: 'Close',
          logo: "© Eduardo A. Garcia",
          navigation_label: 'Navigation',
          cta: 'Let\'s talk',
          home: 'Home',
          about: 'About',
          work: 'Work',
          contact: 'Contact'
        },
        index: {
          hero: {
            h1: "A seasoned software engineer from Brazil expert at crafting memorable websites",
            p: "smalltribe is a branding and digital design studio. We partner with founders to build digital products.",
            button: "Let's talk"
          },
          about: {
            h2: "Not just an usual developer",
            p: `I'm rarely satisfied with my own work, but that ends up being what
              sets me apart. I always belived that success isn't measured by "does
              it work?" but rather "is it a joy to use?"`,
          },
          links: {
            h2: "Social media and contacts"
          },
        },
        footer: {
          h2: "Keep in touch",
          label_start_conversation: "Start a conversation",
          label_message: "Or send me a message",
          whatsapp_number: "+55 51 99670-0348", 
          whatsapp_link: "https://wa.me/5551996700348?text=Hello%20Edu!%20I%20have%20a%20product%20in%20mind%20and%20I%20would%20like%20your%20help%20with%20it.",
          email_address: "eduardo.agarcia117{'@'}gmail.com",
          email_link: "mailto:eduardo.agarcia117{'@'}gmail.com?subject=Hello%20Edu!&body=I%20have%20a%20product%20in%20mind%20and%20I%20would%20like%20your%20help%20with%20it.",
          copyright: {
            label: "© 2025. Eduardo Amengual Garcia. All rights reserved",
            clock: "Brazil"
          }
        }
      },
      pt: {
        welcome: 'Bem vindo',
        menu: {
          menu_open: 'Menu',
          menu_close: 'Close',
          logo: "© Eduardo A. Garcia",
          navigation_label: 'Navegação',
          cta: 'Diga Oi',
          home: 'Início',
          about: 'Sobre',
          work: 'Trabalhos',
          contact: 'Contato'
        },
        index: {
          hero: {
            h1: "A seasoned software engineer from Brazil expert at crafting memorable websites",
            p: "smalltribe is a branding and digital design studio. We partner with founders to build digital products.",
            button: "Vamos falar"
          },
          about: {
            h2: "Não só mais um dev comum",
            p: `Raramente fico totalmente satisfeito com o que faço, e talvez seja isso que me destaque. Sempre acreditei que sucesso não é sobre 'funciona?' e sim 'a experiência foi incrível?'. `,
          },
          links: {
            h2: "Social media e links"
          },
        },
        footer: {
          h2: "Entre em contato",
          label_start_conversation: "Inicie uma conversa",
          label_message: "Ou me manda uma mensagem",
          email_address: "eduardo.agarcia117{'@'}gmail.com",
          email_link: "mailto:eduardo.agarcia117{'@'}gmail.com?subject=Olá%20Edu!&body=Tenho%20um%20produto%20em%20mente%20e%20gostaria%20da%20sua%20ajuda.",
          whatsapp_number: "+55 51 99670-0348", 
          whatsapp_link: "https://wa.me/5551996700348?text=Olá%20Edu!%20Tenho%20um%20produto%20em%20mente%20e%20gostaria%20da%20sua%20ajuda%20com%20ele.",
          copyright: {
            label: "© 2025. Eduardo Amengual Garcia. Todos direitos reservados",
            clock: "Brasil"
          }
        }
      }
    }
  }))