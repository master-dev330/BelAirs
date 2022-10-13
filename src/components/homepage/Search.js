import './search.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

const Search = () => {
    const keyworld = [
        "Festivals",
        "Sites touristiques",
        "Évènements sportifs",
        "Lieux de loisirs",
        "Salles de spectacles",
        "Foires & Salons",
        "Foires & Salons",
        "Autres" 
    ];

    return(
        <div className="search">
            <Form>
                {
                    keyworld.map((item, index) => {
                        return(
                            <FormGroup check inline key={index}>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    {item}
                                </Label>
                            </FormGroup>
                        )
                    })
                }
            </Form>
        </div>
    )
}

export default Search;
