import {React,useEffect,useState} from 'react';
import Gamecircle from './Gamecircle';
import "../Game.css";
import Header from './Header';
import Footer from './Footer';
import { isGameDraw, isWinner ,getComputerMove} from '../helper';

import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN, PLAYER_1,PLAYER_2, } from '../Constants';
// const NOPLAYER = 0;

const Gameboard = () => {
    const [gameBoard,setBoardState] = useState(Array(16).fill(0));
    const [currentPlayer,setGamePlayer]=useState(PLAYER_1);
    const [gameState,setGameState]= useState(GAME_STATE_PLAYING);
    const [winPlayer,setWinPLayer] =useState(0);


    useEffect(()=> {
      initGame();
      },[]);
      
          const initGame = ()=>{
            setBoardState(Array(16).fill(0));
            setGamePlayer(PLAYER_1);
            setGameState(GAME_STATE_PLAYING);
          }


    const initBoard=()=> {
      const circle = [];
      for ( let i = 0; i<16;i++){
        circle.push(renderCircle(i));
      }
      return circle;
      

    }
    const suggestMoveCorrectly = () =>{
     onClickWhen(getComputerMove(gameBoard));
    }


    const onClickWhen =(id)=>{
        console.log('id clicked'+id);
      if(gameBoard[id] !== 0)return;
      if(gameState !== GAME_STATE_PLAYING) return;

        if(isWinner(gameBoard,id,currentPlayer)){
         setGameState(GAME_STATE_WIN);
         setWinPLayer(currentPlayer);
        }
        if(isGameDraw(gameBoard,id,currentPlayer)){
          setGameState(GAME_STATE_DRAW);
          setWinPLayer(0);
         }
       
        setBoardState(prev =>{
       return   prev.map((circle,pos) => {
            if(pos === id)return currentPlayer;
            return circle;
          })
        })

        setGamePlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
        console.log(gameBoard);
        console.log(currentPlayer);


    }

    const renderCircle = id => {
      return <Gamecircle key={id} id={id} classNames={`player_${gameBoard[id]}`} onCircleCliked={onClickWhen} />
    }
  return (
    <>
    <Header gameState={gameState} currentPlayer= {currentPlayer} winPlayer = {winPlayer}/>
    <div className='gameBoard'>
    {initBoard()}
    </div>
    <Footer onNewGameClicked = {initGame} suggestMove = {suggestMoveCorrectly} />
    </>
  )
}

export default Gameboard
