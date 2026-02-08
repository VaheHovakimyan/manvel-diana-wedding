'use client';

import React from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import { BASE_URL } from '../../../../public/common/constants';
import Button from '../../Button/Button';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Անունը պետք է պարունակի առնվազն 2 նիշ')
    .required('Անունը պարտադիր է'),
  phone: yup
    .string()
    .matches(
      /^\+374\d{8}$/,
      'Հեռախոսահամարը պետք է լինի +374 XX-XXX-XXX ձևաչափով'
    )
    .required('Հեռախոսահամարը պարտադիր է'),
  guestsCount: yup
    .number()
    .typeError('Հյուրերի քանակը պետք է լինի թիվ')
    .positive('Հյուրերի քանակը պետք է լինի դրական')
    .integer('Հյուրերի քանակը պետք է լինի ամբողջ թիվ')
    .required('Հյուրերի քանակը պարտադիր է'),
  isVisiting: yup
    .string()
    .oneOf(['true', 'false'], 'Պետք է ընտրեք Այո կամ Ոչ')
    .required('Այցելությունը պարտադիր է'),
  bride_groom: yup
    .string()
    .oneOf(['Փեսա', 'Հարս'], 'Պետք է ընտրեք հարսի կամ փեսայի')
    .required('Պարտադիր դաշտ'),
});

type FormData = yup.InferType<typeof schema>;

const InviteForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/vardges-tatev-wedding/create`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.message) {
        toast.success('Հայտը հաջողությամբ ուղարկվել է:');
        reset();
      } else {
        toast.error('Տեղի է ունեցել Սխալ:');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Տեղի է ունեցել Սխալ:');
    }
  };

  return (
    <section
      className="flex justify-center items-center bg-[#fffaf4] py-12 px-4"
      id="contact-form"
    >
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-6 md:p-10 mx-2 md:mx-6">
        <h2 className="text-2xl md:text-3xl font-serif text-center text-[#5c3d2e] mb-6">
          Հետադարձ կապ
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-[#4d3b2a] font-semibold mb-1">
              Անուն *
            </label>
            <input
              type="text"
              {...register('name')}
              className="w-full p-3 border border-[#E2E5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e] text-[#5a4636]"
              placeholder="Ձեր անունը"
            />
            {errors.name && (
              <p className="text-[#d41919] text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[#4d3b2a] font-semibold mb-1">
              Հեռախոսահամար *
            </label>
            <input
              type="tel"
              {...register('phone')}
              className="w-full p-3 border border-[#E2E5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e] text-[#5a4636]"
              placeholder="+374 55 52 22 85"
            />
            {errors.phone && (
              <p className="text-[#d41919] text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-[#4d3b2a] font-semibold mb-1">
              Հյուրերի քանակ *
            </label>
            <input
              type="number"
              {...register('guestsCount')}
              className="w-full p-3 border border-[#E2E5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3d2e] text-[#5a4636]"
              placeholder="Օր.՝ 3"
            />
            {errors.guestsCount && (
              <p className="text-[#d41919] text-sm mt-1">
                {errors.guestsCount.message}
              </p>
            )}
          </div>

          <div className="">
            <label className="block text-[#4d3b2a] font-semibold mb-3">
              Կարո՞ղ եք ներկա գտնվել *
            </label>
            <div className="flex gap-10">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="true"
                  {...register('isVisiting')}
                  className="w-5 h-5 text-[#5c3d2e] focus:ring-[#5c3d2e] border-[#E2E5DC]"
                />
                <span className="text-[#5a4636]">Այո</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="false"
                  {...register('isVisiting')}
                  className="w-5 h-5 text-[#5c3d2e] focus:ring-[#5c3d2e] border-[#E2E5DC]"
                />
                <span className="text-[#5a4636]">Ցավոք՝ ոչ</span>
              </label>
            </div>
            {errors.isVisiting && (
              <p className="text-[#d41919] text-sm mt-2">
                {errors.isVisiting.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-[#4d3b2a] font-semibold mb-3">
              Ու՞մ կողմից *
            </label>
            <div className="flex gap-10">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Փեսա"
                  {...register('bride_groom')}
                  className="w-5 h-5 text-[#5c3d2e] focus:ring-[#5c3d2e] border-[#E2E5DC]"
                />
                <span className="text-[#5a4636]">Փեսայի</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  value="Հարս"
                  {...register('bride_groom')}
                  className="w-5 h-5 text-[#5c3d2e] focus:ring-[#5c3d2e] border-[#E2E5DC]"
                />
                <span className="text-[#5a4636]">Հարսի</span>
              </label>
            </div>
            {errors.bride_groom && (
              <p className="text-[#d41919] text-sm mt-2">
                {errors.bride_groom.message}
              </p>
            )}
          </div>

          <Button type="submit" text="Ուղարկել" variant="dark" />
        </form>
      </div>
    </section>
  );
};

export default InviteForm;
