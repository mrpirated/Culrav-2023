{/* <div className="mt-4">
          <p
            htmlFor="EventCoordinators"
            className="block mb-2 font-medium text-black"
          >
            Event Coordinators
          </p>
          {eventCoordinators.map((element) => {
            return (
              <div className="teams px-4 py-4 bg-warm rounded-md my-2 flex">
                <p className="text-sm">sam@gmail.com</p>
                <div className="w-full flex justify-end">
                  <div key={element} onClick={removeCoordinator}>
                    <RemoveCircleOutlineIcon />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center">
            <div
              className="teams w-[200px] cursor-pointer px-4 py-4 bg-warm border-2 border-[#9f6e64] hover:bg-[#9f6e64] transition-all duration-200 rounded-md my-2"
              onClick={handleModal}
            >
              <p className="font-semibold text-xl flex justify-center items-center">
                +
              </p>
            </div>
          </div>
        </div>
        
      </div>
    //   {modal && (
    //     <div>
    //       <div
    //         className="fixed top-0 left-0 bg-transparent h-screen w-screen backdrop-blur-sm"
    //         onClick={handleModal}
    //       ></div>

    //       <div
    //         className="fixed top-[50%] left-[50%] w-[90vw] md:w-[50vw] lg:w-[30vw]  bg-light p-4 rounded-md shadow-md"
    //         style={{ transform: "translate(-50%, -50%)" }}
    //       >
    //         <motion.div
    //           whileInView={{ opacity: [0, 1] }}
    //           transition={{ duration: 0.1, ease: "easeOut" }}
    //           viewport={{ once: true }}
    //         >
    //           <label
    //             htmlFor="addcoordinators"
    //             className="block mb-2 font-medium text-black"
    //           >
    //             User Culrav Id
    //           </label>
    //           <input
    //             type="text"
    //             onChange={(e) => {
    //               setDescription(e.target.value);
    //             }}
    //             value={description}
    //             id="addcoordinators"
    //             className="w-full rounded-lg p-2"
    //             placeholder="Enter User Culrav Id"
    //             required
    //           ></input>
    //           <div className="mt-4">
    //             <button
    //               className="hover:shadow-md hover:bg-dark"
    //               onClick={handleClickAddMember}
    //             >
    //               Add User
    //             </button>
    //           </div>
    //         </motion.div>
    //       </div>
    //     </div>
    //   )} */}