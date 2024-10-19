import Dashboard from '../../Components/Dashboard'
import Header from '../../Components/Header'
import NavButtons from '../../Components/RoundedButton'
import Form from '../../Components/Form/Kesahatan'
const KesehatanAdmin = () => {
    const textHeader = "Halaman Depan ADMIN"
    return (
        <div className='w-full h-full flex'>
            <div className='w-[284px] h-full'>
                <Dashboard />
            </div>
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} />
                </div>
                <NavButtons />
                <div className='ml-4 mt-8 flex justify-center item-center'>  <Form /></div>
            </div>
           
          
            
        </div>
    )
}
export default KesehatanAdmin;