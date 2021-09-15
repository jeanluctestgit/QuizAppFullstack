import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import QuestionsService from '../services/questions.service';

function Administration(props) {
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(QuestionsService.addQuestion, {
        onSuccess: data => {
          console.log(data);
          const message = "success"
          alert(message)
        },
        onError: () => {
          alert("there was an error")
        },
        onSettled: () => {
          queryClient.invalidateQueries('create');
        }
      });

    return (
        <div className="Administration">
            <form id='question' onSubmit={(e) => {
                e.preventDefault();
                let data = {};
                let Fdata = new FormData(document.querySelector('#question'));
                data['prompt'] = Fdata.get('prompt');
                data['optionA'] = Fdata.get('optionA');
                data['optionB'] = Fdata.get('optionB');
                data['optionC'] = Fdata.get('optionC');
                data['optionD'] = Fdata.get('optionD');
                data['answer'] = Fdata.get('answer');
                console.log(data)
                mutate(data);
            }}>
                <div>
                <label for='prompt'>prompt</label>
                <input type="text" name='prompt' id='prompt' />
                </div>
                <div>
                <label for='optionA'>optionA</label>
                <input type="text" name='optionA' id='optionA' />
                </div>
                <div>
                <label for='optionB'>optionB</label>
                <input type="text" name='optionB' id='optionB' />
                </div>
                <div>
                <label for='optionC'>optionC</label>
                <input type="text" name='optionC' id='optionC' />
                </div>
                <div>
                <label for='optionD'>optionD</label>
                <input type="text" name='optionD' id='optionD' />
                </div>
                <div>
                <label for='answer'>answer</label>
                <input type="text" name='answer' id='answer' />
                </div>
                <button className="btn" type='submit'>Ajouter une question</button>
                
            </form>
        </div>
    );
}

export default Administration;