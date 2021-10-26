const Default =
 {
   main: {
     backgroundColor: '#fff',
     border: '1px solid #e6e6e6',
     borderBottomRightRadius: '3px',
     borderTopRightRadius: '3px',
     maxWidth: '935px',
     margin: '16px auto',
     width: 'calc(100% - 40px)',

     display: 'flex',
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'flex-start',
     alignContent: 'stretch',
     alignItems: 'flex-start'
   },

   image: {
     order: '1',
     flex: '1 0 60%',
     alignSelf: 'flex-start',
     padding: '3rem 0',
     backgroundColor: '#fafafa'
   },
   text: {
     order: '2',
     flex: '1 0 40%',
     alignSelf: 'flex-start'
   },
   UserBlock: {
     display: 'flex',
     flexDirection: 'row'
   },
   sidebar: {
    padding: '0 1.5rem'
   }
 }
export default Default
